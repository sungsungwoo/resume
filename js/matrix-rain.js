(function () {
  const canvas = document.querySelector(".matrix-canvas");
  const container = document.querySelector(".home-left-bg");

  if (!canvas || !container) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const charSets = [
    "가나다라마바사아자차카타파하거너더러머버서어저처커터퍼허",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ",
    "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
    "0123456789<>[]{}()/\\|+-=*"
  ];

  const keywords = [
    "JAVA",
    "SPRING",
    "BACKEND",
    "SERVER",
    "LINUX",
    "LLM",
    "DATABASE",
    "API",
    "DOCKER",
    "REST",
    "C/C++",
    "PYTHON",
    "RAG",
    "REACT",
    "TCP/IP"
  ];

  let streams = [];
  let animationId = 0;

  function randomChar(source) {
    return source[Math.floor(Math.random() * source.length)];
  }

  function randomKeyword() {
    return keywords[Math.floor(Math.random() * keywords.length)];
  }

  function resetStream(stream, height, randomStart = false) {
    stream.y = randomStart
      ? -Math.random() * height
      : -Math.random() * 420 - stream.length * stream.fontSize;

    stream.speed = 0.55 + Math.random() * 1.35;
    stream.length = 8 + Math.floor(Math.random() * 16);
  }

  function buildStreams() {
    const width = container.clientWidth;
    const height = container.clientHeight;

    streams = [];

    let x = 0;
    const fontSizes = [12, 14, 16, 18, 22];

    while (x < width + 40) {
      const fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];

      const stream = {
        x,
        y: -Math.random() * height,
        speed: 0.55 + Math.random() * 1.35,
        fontSize,
        length: 8 + Math.floor(Math.random() * 16),
        charset: charSets[Math.floor(Math.random() * charSets.length)]
      };

      streams.push(stream);
      x += fontSize * (0.9 + Math.random() * 0.8);
    }
  }

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const width = container.clientWidth;
    const height = container.clientHeight;

    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));

    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.style.zIndex = "1";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    buildStreams();
    streams.forEach((stream) => resetStream(stream, height, true));
  }

  function draw() {
    const width = container.clientWidth;
    const height = container.clientHeight;

    /**
     * 이 색상은 실제 배경색이 아니라,
     * 이전 프레임을 서서히 지우기 위한 반투명 잔상 레이어입니다.
     *
     * alpha가 높을수록:
     * - 잔상이 빨리 사라짐
     * - 배경이 더 어두워짐
     *
     * alpha가 낮을수록:
     * - 잔상이 길게 남음
     * - 배경이 덜 어두워짐
     */
    ctx.fillStyle = "rgba(6, 16, 10, 0.06)";
    ctx.fillRect(0, 0, width, height);

    streams.forEach((stream) => {
      const step = stream.fontSize * 1.12;
      const fontFamily = 'ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, monospace';

      for (let i = 0; i < stream.length; i += 1) {
        const y = stream.y - i * step;

        if (y < -step || y > height + step) continue;

        const alpha = 1 - i / stream.length;
        const useKeyword = i === 0 && Math.random() < 0.02;
        const char = useKeyword ? randomKeyword() : randomChar(stream.charset);

        if (i === 0) {
          ctx.fillStyle = "rgba(220, 255, 230, 0.78)";
        } else if (i < 3) {
          ctx.fillStyle = "rgba(167, 243, 208, " + (0.48 * alpha) + ")";
        } else {
          ctx.fillStyle = "rgba(34, 197, 94, " + (0.28 * alpha) + ")";
        }

        ctx.font = stream.fontSize + "px " + fontFamily;
        ctx.fillText(char, stream.x, y);
      }

      stream.y += stream.speed;

      if (stream.y - stream.length * step > height + 60) {
        resetStream(stream, height);
      }
    });

    animationId = window.requestAnimationFrame(draw);
  }

  resize();
  draw();

  window.addEventListener("resize", resize);

  window.addEventListener("beforeunload", function () {
    window.cancelAnimationFrame(animationId);
  });
})();
