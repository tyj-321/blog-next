# 移动端适配方案

因为移动终端的分辨率各个品牌型号各不相同，要让不同屏幕大小的终端设备展示的界面要统一，就需要进行移动端适配。一些适配方案

- 使用单位rem，根据当前页面相对于视觉稿的比例，去设置html元素的font-size的值，则1rem的值就等于font-size值，这样界面内的元素尺寸都通过这个单位去设置，就可以等比例适配，可以结合弹性布局来设置某些固定尺寸和自适应尺寸。可以通过`postcss-pxtorem`插件自动完成单位换算
- vh/vw方案，通过把页面的高和宽分成100份，1vw就代表一份宽，1vh就代表一份高，元素尺寸用这个单位设置，完成适配。可以通过`postcss-px-to-viewport `插件自动进行单位换算(消费云移动端使用的就是这个方案)

- 使用百分比作为来设置尺寸，百分比元素参考的对象为父元素，元素嵌套较深就会很麻烦
- 媒体查询的方式，理论上可以对所有设备进行媒体查询，但是不合理，可以对极个别特殊情况进行媒体查询适配(ipad大屏设备)



#### img的srcset属性 

`srcset`属性为了在不同设备像素比(1x 2x 3x)的设备上使用不同的图片资源，假设图片资源是100px * 100px，而移动端分辨率是200px * 200px，这时候就把移动端的两像素当成一像素来进行渲染，即2x，这时候就要使用分辨率更高的图片资源，以达到设备的高分辨率图片效果

可以使用svg格式的图片来替代上述方案，svg是可缩放矢量图形，任意伸缩图像，不会破坏图像的清晰度和细节







## 祝中秋假期愉快！！

