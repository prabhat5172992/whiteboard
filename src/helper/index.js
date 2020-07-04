function defaultCanvas(canvasRef, parentRef, setCtx, setCanvasOffset) {
  let canv = canvasRef.current;
  canv.width = parentRef.current.offsetWidth;
  canv.height = parentRef.current.offsetHeight;

  let canvCtx = canv.getContext("2d");
  canvCtx.lineJoin = "round";
  canvCtx.lineCap = "round";
  canvCtx.lineWidth = 5;
  setCtx(canvCtx);

  let offset = canv.getBoundingClientRect();
  setCanvasOffset({ x: parseInt(offset.left), y: parseInt(offset.top) });
}

export { defaultCanvas };
