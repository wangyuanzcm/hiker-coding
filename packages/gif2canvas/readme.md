#将gif图片转化为canvas实现

第一步：获取gif数据流
第二步：抽取gif里面的播放规则和图片数据
第三步：生成canvas代码
第四步：生成canvas的动态效果

借用html2canvas的能力生成canvas

使用requestAnimationFrame实现动态效果
```
function next(){
    //向浏览器请求一帧
    requestAnimationFrame(function(){
        //绘图
        ctx.drawImage(video, 0, 0);
        //获取画面像素信息，得到一个每个像素点的rgba值得数组，需要运行在服务端
        var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imgData.data;
        // console.log(imgData);
        for(var h=0; h<canvas.height; h++){     //canvas高
            for(var w=0; w<canvas.width; w++){      //canvas宽
                //每个像素rgb的平均值
                var avg = Math.floor((data[(h*canvas.width+w)*4]+data[(h*canvas.width+w)*4+1]+data[(h*canvas.width+w)*4+2])/3);
                //每个像素的rgb值都设为平均值，达到中间灰效果
                data[(h*canvas.width+w)*4]=data[(h*canvas.width+w)*4+1]=data[(h*canvas.width+w)*4+2] = avg;
            }
        }
        //将修改后的像素信息放回去
        ctx.putImageData(imgData, 0, 0);
        next();
    })
}
```


目前利用libgif可以生成一个canvas实例，插入到html里面。
但是在实际生产环境中的场景应该是这样：设计同学给出一个gif图，要求实现这个动效。那么对于
前端来说，最理想的实现方式就是canvas，所以我们要实现的是将gif转成canvas代码。