'use client'

import { useEffect, useRef } from "react";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;

    const bgm = new Audio("/99477_Every_End....mp3");
    bgm.loop = true;
    bgm.volume = 0.4;

    let won = false;
   const arena = {
      x: 0,
      y: 0,
      w: c.width,
      h: c.height,
    };


    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;

      arena.w = c.width;
      arena.h = c.height;
    };

    resize();
    window.addEventListener("resize", resize);

    // ===== INPUT =====

    const keys: Record<string, boolean> = {};

    const keyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;

      if (won && (e.key === "r" || e.key === "R")) {
        won = false;
        reset();
      }
    };

    const keyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    // ===== GAME STATE =====

    let started = false;
    let hardcore = false;
    let time = 0;
    let bullets: Bullet[] = [];
    let shake = 0;
    let animationId = 0;

    // ===== ARENA =====


    // ===== PLAYER =====

    class Player {
      x: number;
      y: number;
      hp: number;

      constructor() {
        this.x = c.width / 2;
        this.y = c.height - 80;
        this.hp = 100;
      }

      update() {
        if (keys["ArrowLeft"]) this.x -= 6;
        if (keys["ArrowRight"]) this.x += 6;
        if (keys["ArrowUp"]) this.y -= 6;
        if (keys["ArrowDown"]) this.y += 6;

        this.x = Math.max(arena.x, Math.min(arena.x + arena.w, this.x));
        this.y = Math.max(arena.y, Math.min(arena.y + arena.h, this.y));
      }

      draw() {
        ctx.font = "28px Arial";
        ctx.fillText("🧍", this.x, this.y);
      }
    }

    const player = new Player();

    // ===== BULLETS =====

    class Bullet {
      x: number;
      y: number;
      vx: number;
      vy: number;
      type: string;
      dead: boolean;

      constructor(
        x: number,
        y: number,
        vx: number,
        vy: number,
        type = "normal"
      ) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.type = type;
        this.dead = false;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        ctx.font = "16px Arial";
        ctx.fillText(this.type === "boss" ? "💀" : "🔴", this.x, this.y);
      }
    }

    // ===== HOMING BULLET =====

    class HomingBullet extends Bullet {
      update() {
        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const m = Math.hypot(dx, dy);

        this.vx += (dx / m) * 0.35;
        this.vy += (dy / m) * 0.35;

        const sp = Math.hypot(this.vx, this.vy);

        this.vx = (this.vx / sp) * 6;
        this.vy = (this.vy / sp) * 6;

        super.update();
      }

      draw() {
        ctx.font = "18px Arial";
        ctx.fillText("🔴", this.x, this.y);
      }
    }

    // ===== BOSS =====

    class Boss {
      x: number;
      y: number;
      t: number;

      laserTimer: number;
      laserX: number;

      cx: number;
      cy: number;
      chargeTimer: number;

      constructor() {
        this.x = c.width / 2;
        this.y = 120;
        this.t = 0;

        this.laserTimer = 0;
        this.laserX = 0;

        this.cx = 0;
        this.cy = 0;
        this.chargeTimer = 0;
      }

      update() {
        this.t++;
        time++;

        if (time >= 60 * 7 * 60) {
          won = true;
          return;
        }

        this.x += (player.x - this.x) * 0.03;

        const speed = 5 + time / 800;
        const rate = Math.max(16 - time / 250, 4);

        if (this.t % rate === 0) this.barrage(speed);
        if (this.t % 23 === 0) this.spiral();
        if (this.t % 60 === 0) this.ring();
        if (this.t % 140 === 0) this.homing();

        if (this.t % 300 === 0) {
          this.laserTimer = 180;
          this.laserX = player.x;
        }

        if (this.laserTimer > 0) {
          this.laserTimer--;

          if (this.laserTimer < 120) {
            if (Math.abs(player.x - this.laserX) < 40) {
              kill();
            }
          }
        }

        if (this.t % 420 === 0) {
          const dx = player.x - this.x;
          const dy = player.y - this.y;
          const m = Math.hypot(dx, dy);

          this.cx = dx / m;
          this.cy = dy / m;
          this.chargeTimer = 40;
        }

        if (this.chargeTimer > 0) {
          this.chargeTimer--;

          this.x += this.cx * 14;
          this.y += this.cy * 14;

          if (Math.hypot(player.x - this.x, player.y - this.y) < 45) {
            kill();
          }
        }

      // Continues in Part 2...
            }

      barrage(speed: number) {
        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const m = Math.hypot(dx, dy);

        bullets.push(
          new Bullet(
            this.x,
            this.y,
            (dx / m) * speed,
            (dy / m) * speed,
            "boss"
          )
        );
      }

      spiral() {
        const a = time * 0.2;

        bullets.push(
          new Bullet(
            this.x,
            this.y,
            Math.cos(a) * 7,
            Math.sin(a) * 7,
            "boss"
          )
        );
      }

      ring() {
        const n = 12 + Math.floor(time / 200);

        for (let i = 0; i < n; i++) {
          const a = i * ((Math.PI * 2) / n) + time * 0.01;

          bullets.push(
            new Bullet(
              this.x,
              this.y,
              Math.cos(a) * 6,
              Math.sin(a) * 6,
              "boss"
            )
          );
        }
      }

      homing() {
        bullets.push(
          new HomingBullet(
            this.x,
            this.y,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            "boss"
          )
        );
      }

      draw() {
        ctx.font = "40px Arial";
        ctx.fillText("👹", this.x, this.y);

        if (this.laserTimer > 0) {
          ctx.beginPath();
          ctx.moveTo(this.laserX, 0);
          ctx.lineTo(this.laserX, c.height);
          ctx.strokeStyle = this.laserTimer > 60 ? "yellow" : "red";
          ctx.lineWidth = 6;
          ctx.stroke();
        }

        const p = Math.min(time / (60 * 7 * 60), 1);

        ctx.fillStyle = "white";
        ctx.fillRect(20, 20, 300 * p, 10);
      }
    }

    let boss = new Boss();

    // ===== HELPERS =====\\ IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! IMPORTANT FUNCTION!!! 

    function hit(a: { x: number; y: number }, b: { x: number; y: number }) {
      return (
        Math.abs(a.x - b.x) < 20 &&
        Math.abs(a.y - b.y) < 20
      );
    }

    function kill() {
      shake = 10;

      if (hardcore) {
        reset();
      } else {
        player.hp -= 20;

        if (player.hp <= 0) {
          reset();
        }
      }
    }

    function reset() {
      started = false;
      time = 0;
      won = false;

      bullets = [];

      player.x = c.width / 2;
      player.y = c.height - 80;
      player.hp = 100;

      boss = new Boss();

      arena.x = 0;
      arena.y = 0;
      arena.w = c.width;
      arena.h = c.height;

      bgm.pause();
      bgm.currentTime = 0;
    }

    // ===== LOOP =====

    function loop() {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, c.width, c.height);

      if (!started) {
        bullets.length = 0;
      }

      // ===== WIN SCREEN =====

      if (won) {
        ctx.fillStyle = "rgba(0,0,0,0.9)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.textAlign = "center";

        ctx.fillStyle = "gold";
        ctx.font = "bold 80px Arial";
        ctx.fillText(
          "BULLET RUSH CLEARED",
          c.width / 2,
          c.height / 2 - 40
        );

        ctx.fillStyle = "white";
        ctx.font = "28px Arial";
        ctx.fillText(
          "Final Time: " + (time / 60).toFixed(1) + "s",
          c.width / 2,
          c.height / 2 + 30
        );

        ctx.fillStyle = "#aaaaaa";
        ctx.font = "20px Arial";
        ctx.fillText(
          "Press R to return to menu",
          c.width / 2,
          c.height / 2 + 80
        );

        animationId = requestAnimationFrame(loop);
        return;
      }

      // ===== TIMER =====

      ctx.textAlign = "left";
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText(
        "TIME: " + (time / 60).toFixed(1) + "s",
        20,
        40
      );

      // ===== SCREEN SHAKE =====

      let ox = 0;
      let oy = 0;

      if (shake > 0) {
        ox = (Math.random() - 0.5) * shake;
        oy = (Math.random() - 0.5) * shake;
        shake *= 0.9;
      }

      ctx.save();
      ctx.translate(ox, oy);

      if (!started) {
                ctx.save();

        // Background
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(-1000, -1000, c.width+2000, c.height+2000);

        ctx.textAlign = "center";

        // ===== TITLE =====
        ctx.fillStyle = "white";
        ctx.font = "bold 60px Arial";
        ctx.fillText("Bullet Rush:", c.width / 2, c.height / 2 - 120);

        ctx.font = "bold 70px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("SURVIVE", c.width / 2, c.height / 2 - 50);

        // ===== MENU =====
        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText(
          "PRESS 1 FOR NORMAL",
          c.width / 2,
          c.height / 2 + 40
        );
        ctx.fillText(
          "PRESS 2 FOR HARDCORE 😈",
          c.width / 2,
          c.height / 2 + 80
        );

        ctx.fillStyle = "#aaaaaa";
        ctx.font = "16px Arial";
        ctx.fillText(
          "dodge bullets. survive the chaos. (60 FPS recommended, trust me.)",
          c.width / 2,
          c.height / 2 + 140
        );

        ctx.restore();

        // ===== INPUT =====

        if (keys["1"]) {
          started = true;
          hardcore = false;

          bgm.currentTime = 0;
          bgm.play().catch(() => {});
        }

        if (keys["2"]) {
          started = true;
          hardcore = true;

          bgm.currentTime = 0;
          bgm.play().catch(() => {});
        }

        ctx.restore();

        animationId = requestAnimationFrame(loop);
        return;
      }

      // ===== GAME =====

      player.update();
      player.draw();

      boss.update();
      boss.draw();


      for (const b of bullets) {
        b.update();
        b.draw();

        if (hit(player, b)) {
          b.dead = true;
          kill();
        }
        //BULLET BUG IT DOESNT DISSAPEAR BUGFIX NEEDED URgenTLY

        if (b.x<-5 || b.x>c.width+51){
          b.dead=true
        }
        if (b.y<-5 || b.y>c.height+51){
          b.dead=true
        }
      }

      bullets = bullets.filter((b) => !b.dead);

      ctx.restore();

      animationId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      cancelAnimationFrame(animationId);

      bgm.pause();
      bgm.currentTime = 0;

      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, []);

  return (
    <main
      style={{
        margin: 0,
        overflow: "hidden",
        background: "#000",
        width: "100vw",
        height: "100vh",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100vw",
          height: "100vh",
        }}
      />
    </main>
  );
}