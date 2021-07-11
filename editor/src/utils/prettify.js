const ROOT_DESCRIBE_BLOCK_NAME = 'ROOT_DESCRIBE_BLOCK';
export const constructResultsHTML = ({ logs = [], data = [] }) => {
  let totalDuration = 0;
  let passed = 0;
  let failed = 0;
  const testLogsHTML = logs.reduce((per, cur) => {
    // 打印console日志
    const testResultHTML = `<div class="jest-lite-report__result">${cur}</div>`;
    return `${per}${testResultHTML}`;
  }, '')
  const testsResultsHTML = data.reduce(
    (currentOutput, { duration, status, errors, testPath }) => {
      // Casting because the types in Circus.TestStatus
      // Don't correspond with the actual given status
      if (status === 'fail') {
        failed += 1;
      } else {
        passed += 1;
      }
      const testResultHTML = constructResultHTML(
        status,
        testPath,
        errors,
      );
      totalDuration += duration;
      return `${currentOutput}${testResultHTML}`;
    },
    '',
  );
  return `
    ${testLogsHTML}
    ${testsResultsHTML}
    ${constructSummaryHTML(
    failed > 0 ? 'fail' : 'pass',
    failed,
    passed,
    totalDuration,
  )}
  `;
}

function constructSummaryHTML(
  status,
  failed,
  passed,
  timeInMilliseconds,
) {
  return `
    <span class="jest-lite-report__summary-status jest-lite-report__summary-status--${status}">
      Tests: ${failed} failed, ${passed} passed, ${passed + failed} total<br>
      Time: ${timeInMilliseconds / 1000}s
    </span>
  `;
}

function constructResultHTML(
  status,
  testPath,
  errors,
) {
  const statusIcon = status === 'fail' ? '×' : '✓';
  let errorsWrapperHTML = '';

  if (errors.length > 0) {
    const errorsHTML = errors.map(error => escapeHTML(error)).join();
    errorsWrapperHTML = `<div class="jest-lite-report__errors">${errorsHTML}</div>`;
  }

  return `
    <div class="jest-lite-report__result">
      <span class="jest-lite-report__status-icon">${statusIcon}</span>
      <span class="jest-lite-report__status jest-lite-report__status--${status}">
        ${status.toUpperCase()}
      </span>
      ${cleanTestPath(testPath).join(' › ')}
      ${errorsWrapperHTML}
    </div>
  `;
}

function cleanTestPath(path) {
  return path
    .filter(part => part !== ROOT_DESCRIBE_BLOCK_NAME)
    .map(part => escapeHTML(part));
}

function escapeHTML(html) {
  return html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}