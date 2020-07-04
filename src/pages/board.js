import React, { useState, useEffect } from "react";
import Controls from "../components/control";
import { defaultCanvas } from "../helper";
import "../css/Board.css";

function Board() {
  const canvasRef = React.useRef(null);
  const parentRef = React.useRef(null);
  const [ctx, setCtx] = useState({});
  const [drawing, setDrawing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    defaultCanvas(canvasRef, parentRef, setCtx, setCanvasOffset);
  }, [ctx]);

  function handleMouseDown(e) {
    setDrawing(true);
    setPosition({
      x: parseInt(e.clientX - canvasOffset.x),
      y: parseInt(e.clientY - canvasOffset.y),
    });
  }

  function handleMouseUp() {
    setDrawing(false);
  }

  function handleMouseMove(e) {
    let mousex = e.clientX - canvasOffset.x;
    let mousey = e.clientY - canvasOffset.y;
    if (drawing) {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(position.x, position.y);
      ctx.lineTo(mousex, mousey);
      ctx.stroke();
    }
    setPosition({ x: mousex, y: mousey });
  }

  function handleColor(color) {
    setColor(color);
  }

  function handleClear() {
    setCtx({});
  }

  return (
    <div className="board" ref={parentRef}>
      <Controls handleColor={handleColor} handleClear={handleClear} />
      <canvas
        className="canvas"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
}

export default Board;
