var Canvas2DUtil = /** @class */ (function () {
    function Canvas2DUtil(canvas) {
        this.context = canvas.getContext("2d");
    }
    Canvas2DUtil.prototype.drawText = function (text) {
        this.context.save();
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        var centerX = this.context.canvas.width * 0.5;
        var centerY = this.context.canvas.height * 0.5;
        this.context.fillText(text, centerX, centerY);
        this.context.strokeStyle = "green"; //绿色描边
        this.context.strokeText(text, centerX, centerY);
        this.context.restore();
    };
    return Canvas2DUtil;
}());
var canvas = document.getElementById("canvas");
if (canvas === null) {
    alert("can not get HTMLCanvasElement");
    throw new Error("can not get HTMLCanvasElement");
}
var canvas2d = new Canvas2DUtil(canvas);
canvas2d.drawText("hello world");
