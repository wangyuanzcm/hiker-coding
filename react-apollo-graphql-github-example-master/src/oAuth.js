const UTTERANCES_API = 'http://localhost:7000';
let redirect_uri = "http://localhost:3000"
const token = { value: null };

export function deparam(query) {
    let match;
    const plus = /\+/g;
    const search = /([^&=]+)=?([^&]*)/g;
    const decode = (s) => decodeURIComponent(s.replace(plus, ' '));
    const params = {};
    // tslint:disable-next-line:no-conditional-assignment
    while (match = search.exec(query)) {
        params[decode(match[1])] = decode(match[2]);
    }
    return params;
}

export function param(obj) {
    const parts = [];
    for (const name in obj) {
        if (obj.hasOwnProperty(name) && obj[name]) {
            parts.push(`${encodeURIComponent(name)}=${encodeURIComponent(obj[name])}`);
        }
    }
    return parts.join('&');
}
export function getLoginUrl() {
    return `${UTTERANCES_API}/authorize?${param({ redirect_uri })}`;
}


export async function loadToken(session) {
    if (token.value) {
        return token.value;
    }
    const url = `${UTTERANCES_API}/token`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(session)
    });
    if (response.ok) {
        const t = await response.json();
        token.value = t;
        return t;
    }
    return null;
}