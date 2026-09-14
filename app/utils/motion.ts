import type { Options } from "motion-v";

/**
 * Single source of truth for PETER's motion.
 *
 * `motionPresets` is fed to the `motion-v` Nuxt module (see `nuxt.config.ts`),
 * which registers each key as a global directive. Pages therefore import
 * nothing and just write:
 *
 *   <section v-reveal>…</section>
 *   <UCard v-for="(item, i) in items" v-reveal="revealAt(i)">…</UCard>
 *
 * Retune the tokens here and every page follows.
 */

const DURATION = 0.5;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISTANCE = 16;
const VIEWPORT = { once: true, amount: 0.2 };

export const motionPresets = {
  /** Fade + rise once the element scrolls into view. The default for sections and cards. */
  reveal: {
    initial: { opacity: 0, y: DISTANCE },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: VIEWPORT,
    transition: { duration: DURATION, ease: EASE },
  },
} satisfies Record<string, Options>;

/**
 * Stagger helper for lists: `v-reveal="revealAt(index)"`.
 *
 * Spreads the shared transition because directive options are shallow-merged,
 * so passing `transition` here would otherwise drop the duration and easing.
 */
export function revealAt(index: number, step = 0.07): Options {
  return { transition: { duration: DURATION, ease: EASE, delay: index * step } };
}
