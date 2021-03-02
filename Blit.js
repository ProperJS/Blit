import Controller from "properjs-controller";



const raf = window.requestAnimationFrame;
const caf = window.cancelAnimationFrame;



export default class Blit extends Controller {
    constructor ( options ) {
        super();

        this._now = null;
        this._then = null;
        this._delta = null;
        this._first = null;
        this._time = null;
        this._frame = 0;
        this._cycle = null;
        this._started = false;
        this._fps = (options.fps || 60);
        this._interval = (1000 / this._fps);
        this._blit = (options.blit || null);
        this._paused = (options.paused || false);

        // Start if we can
        if ( !this._started && !this._paused ) {
            this.start();
        }
    }

    blit ( fn ) {
        if ( typeof fn === "function" ) {
            this._blit = fn;
        }

        return this;
    }

    pause () {
        this._paused = true;

        return this;
    }

    play () {
        this._paused = false;

        return this;
    }

    start () {
        if ( this._started ) {
            return this;
        }

        this._paused = false;
        this.blitInit();

        return this;
    }

    stop () {
        caf( this._cycle );

        this._started = false;
        this._cycle = null;

        return this;
    }

    blitInit () {
        if ( this._started ) {
            return this;
        }

        this._started = true;
        this._then = Date.now();
        this._first = this._then;

        const blit = () => {
            this._cycle = raf( blit );
            this._now = Date.now();
            this._delta = this._now - this._then;

            if ( this._delta > this._interval ) {
                if ( !this._paused ) {
                    this._frame++;
                    this._then = this._now - (this._delta % this._interval);
                    this._time = (this._then - this._first);

                    if ( typeof this._blit === "function" ) {
                        this._blit( this._frame );
                    }
                }
            }
        };

        blit();
    }
}
