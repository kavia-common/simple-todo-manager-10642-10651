import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './home.module.css';
/* Images are read from the public folder. To optimize via ESM (?jsx), move binaries under src and import as modules. */

/**
 * PUBLIC_INTERFACE
 * HomePage route displays a pixel-accurate conversion of assets/home-1-49.html into Qwik.
 * - Absolute-positioned artboard replicates the Figma layout for visual parity.
 * - Design tokens are mapped from assets/common.css into local CSS module.
 * - Minimal interaction: category chip active state, implemented with a Signal.
 */
export default component$(() => {
  /* CSS Modules are scoped by default; no need to call useStylesScoped$. */

  // Active category reactivity (migrated from assets/app.js)
  const activeChip = useSignal<string>('All');

  // PUBLIC_INTERFACE
  const setChip$ = $((name: string) => {
    activeChip.value = name;
  });

  // Helper: builds chip classes conditionally
  const chipCls = (name: string) =>
    `${styles.chip} ${activeChip.value === name ? styles.isActive : ''}`;

  return (
    <div class={styles.pageWrap}>
      {/* Artboard container to preserve the intended Figma canvas look */}
      <div class={`${styles.artboard} ${styles.bg0}`}>
        {/* Brand */}
        <div class={`${styles.abs} ${styles.typoBrand}`} style="left:19px; top:28px; width:129px; height:61px;">
          Foodgo
        </div>

        {/* Subtitle */}
        <div class={`${styles.abs} ${styles.typoSub}`} style="left:19px; top:89px; width:238px; height:27px;">
          Order your favourite food!
        </div>

        {/* Avatar */}
        <div class={styles.abs} style="left:371px; top:28px; width:60px; height:60px;">
          <div class={`${styles.abs} ${styles.bg3}`} style="left:0px; top:0px; width:60px; height:60px; border-radius:20px;" />
          <div class={styles.abs} style="left:-29px; top:-3px; width:106px; height:73px; overflow:hidden; border-radius:20px;">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img class={styles.figImg} src="/figmaimages/figma_image_1_54.png" alt="avatar" />
          </div>
        </div>

        {/* Search + Filter */}
        <div class={styles.abs} style="left:19px; top:165px; width:392px; height:60px;">
          <div class={`${styles.abs} ${styles.card15}`} style="left:0px; top:0px; width:319px; height:60px;" />
          <div class={styles.abs} style="left:332px; top:0px; width:60px; height:60px;">
            <div class={`${styles.abs} ${styles.cta16}`} style="left:0px; top:0px; width:60px; height:60px;" />
            <div class={styles.abs} title="settings-sliders" style="left:18px; top:18px; width:24px; height:24px; background:transparent;">
              <div class={`${styles.abs} ${styles.bg6}`} style="left:0px; top:0.625px; width:24px; height:7px;" />
              <div class={`${styles.abs} ${styles.bg6}`} style="left:0px; top:8.5px; width:24px; height:7px;" />
              <div class={`${styles.abs} ${styles.bg6}`} style="left:0px; top:16.375px; width:24px; height:7px;" />
            </div>
          </div>

          {/* Search icon placeholder + text */}
          <div class={styles.abs} style="left:20px; top:18px; width:104px; height:24px;">
            <div class={styles.abs} style="left:0px; top:0px; width:24px; height:24px;">
              <div class={`${styles.abs} ${styles.bg1}`} style="left:0px; top:0px; width:24px; height:24px; border-radius:12px; opacity:0;" />
              <div class={`${styles.abs} ${styles.bg1}`} style="left:0px; top:0px; width:24px; height:24px; border-radius:50%; opacity:0.12;" />
            </div>
            <div class={`${styles.abs} ${styles.typoSearch}`} style="left:48px; top:1px; width:56px; height:21px;">
              Search
            </div>
          </div>
        </div>

        {/* Category chips */}
        <div class={styles.abs} style="left:18px; top:266px; width:412px; height:50px;">
          <button class={chipCls('All')} style="left:20px; top:0px; width:75px; height:50px;" data-chip onClick$={() => setChip$('All')}>
            <div class={`${styles.abs} ${styles.cta16}`} style="left:0px; top:0px; width:75px; height:50px;" />
            <div class={`${styles.abs} ${styles.typoChipActive}`} style="left:27px; top:15px; width:20px; height:19px; text-align:center;">
              All
            </div>
          </button>

          <button class={chipCls('Combos')} style="left:109px; top:0px; width:120px; height:50px;" data-chip onClick$={() => setChip$('Combos')}>
            <div class={`${styles.abs} ${styles.bg9}`} style="left:0px; top:0px; width:120px; height:50px; border-radius:20px;" />
            <div class={`${styles.abs} ${styles.typoChip}`} style="left:28px; top:15px; width:64px; height:19px;">
              Combos
            </div>
          </button>

          <button class={chipCls('Sliders')} style="left:243px; top:0px; width:120px; height:50px;" data-chip onClick$={() => setChip$('Sliders')}>
            <div class={`${styles.abs} ${styles.bg9}`} style="left:0px; top:0px; width:120px; height:50px; border-radius:20px;" />
            <div class={`${styles.abs} ${styles.typoChip}`} style="left:33px; top:16px; width:53px; height:19px;">
              Sliders
            </div>
          </button>

          <button class={chipCls('Classic')} style="left:377px; top:0px; width:110px; height:50px;" data-chip onClick$={() => setChip$('Classic')}>
            <div class={`${styles.abs} ${styles.bg9}`} style="left:0px; top:0px; width:110px; height:50px; border-radius:20px;" />
            <div class={`${styles.abs} ${styles.typoChip}`} style="left:27px; top:15px; width:56px; height:19px;">
              Classic
            </div>
          </button>
        </div>

        {/* Grid - Card 1 */}
        <div class={styles.abs} style="left:19px; top:357px; width:185px; height:225px;">
          <div class={`${styles.abs} ${styles.card17}`} style="left:0px; top:0px; width:185px; height:225px; border-radius:20px;" />
          <div class={styles.abs} style="left:26px; top:5px; width:120px; height:121.7578125px;">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img class={styles.figImg} src="/figmaimages/figma_image_1_83.png" alt="Cheeseburger Wendy's Burger" />
          </div>
          <div class={`${styles.abs} ${styles.bg10}`} style="left:47px; top:109px; width:91px; height:11px; border-radius:50%;" />
          <div class={`${styles.abs} ${styles.typoBody}`} style="left:11px; top:136px; width:117px; height:44px;">
            Cheeseburger Wendy&apos;s Burger
          </div>
          <div class={styles.abs} style="left:11px; top:189px; width:44px; height:22px;">
            <div class={`${styles.abs} ${styles.bg11}`} style="left:0px; top:3px; width:16px; height:16px; border-radius:3px;" />
            <div class={`${styles.abs} ${styles.typoRating}`} style="left:21px; top:0px; width:23px; height:22px;">4.9</div>
          </div>
          <div class={`${styles.abs} ${styles.bg1}`} style="left:161px; top:201px; width:24px; height:24px; border-radius:12px; opacity:0.12;" />
        </div>

        {/* Grid - Card 2 */}
        <div class={styles.abs} style="left:226px; top:357px; width:185px; height:225px;">
          <div class={`${styles.abs} ${styles.card17}`} style="left:0px; top:0px; width:185px; height:225px; border-radius:20px;" />
          <div class={styles.abs} style="left:33px; top:11px; width:120px; height:120px;">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img class={styles.figImg} src="/figmaimages/figma_image_1_92.png" alt="Hamburger Veggie Burger" />
          </div>
          <div class={`${styles.abs} ${styles.bg10}`} style="left:48px; top:110px; width:91px; height:11px; border-radius:50%;" />
          <div class={`${styles.abs} ${styles.typoBody}`} style="left:11px; top:136px; width:117px; height:44px;">
            Hamburger Veggie Burger
          </div>
          <div class={styles.abs} style="left:11px; top:189px; width:44px; height:22px;">
            <div class={`${styles.abs} ${styles.bg11}`} style="left:0px; top:3px; width:16px; height:16px; border-radius:3px;" />
            <div class={`${styles.abs} ${styles.typoRating}`} style="left:21px; top:0px; width:23px; height:22px;">4.8</div>
          </div>
          <div class={`${styles.abs} ${styles.bg1}`} style="left:161px; top:201px; width:24px; height:24px; border-radius:12px; opacity:0.12;" />
        </div>

        {/* Grid - Card 3 */}
        <div class={styles.abs} style="left:19px; top:613px; width:185px; height:225px;">
          <div class={`${styles.abs} ${styles.card17}`} style="left:0px; top:0px; width:185px; height:225px; border-radius:20px;" />
          <div class={styles.abs} style="left:14px; top:0px; width:150px; height:137.7px;">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img class={styles.figImg} src="/figmaimages/figma_image_1_101.png" alt="Hamburger Chicken Burger" />
          </div>
          <div class={`${styles.abs} ${styles.bg10}`} style="left:34px; top:108px; width:110px; height:15.7609px; border-radius:50%;" />
          <div class={`${styles.abs} ${styles.typoBody}`} style="left:11px; top:136px; width:117px; height:44px;">
            Hamburger <br />
            Chicken Burger
          </div>
          <div class={styles.abs} style="left:11px; top:189px; width:44px; height:22px;">
            <div class={`${styles.abs} ${styles.bg11}`} style="left:0px; top:3px; width:16px; height:16px; border-radius:3px;" />
            <div class={`${styles.abs} ${styles.typoRating}`} style="left:21px; top:0px; width:23px; height:22px;">4.6</div>
          </div>
          <div class={`${styles.abs} ${styles.bg1}`} style="left:161px; top:201px; width:24px; height:24px; border-radius:12px; opacity:0.12;" />
        </div>

        {/* Grid - Card 4 */}
        <div class={styles.abs} style="left:226px; top:613px; width:185px; height:225px;">
          <div class={`${styles.abs} ${styles.card17}`} style="left:0px; top:0px; width:185px; height:225px; border-radius:20px;" />
          <div class={styles.abs} style="left:31px; top:25px; width:145px; height:100.59375px;">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img class={styles.figImg} src="/figmaimages/figma_image_1_110.png" alt="Hamburger Fried Chicken Burger" />
          </div>
          <div class={`${styles.abs} ${styles.bg10}`} style="left:41.5px; top:110px; width:112px; height:11px; border-radius:50%;" />
          <div class={`${styles.abs} ${styles.typoBody}`} style="left:11px; top:136px; width:158px; height:44px;">
            Hamburger <br />
            Fried Chicken Burger
          </div>
          <div class={styles.abs} style="left:11px; top:189px; width:44px; height:22px;">
            <div class={`${styles.abs} ${styles.bg11}`} style="left:0px; top:3px; width:16px; height:16px; border-radius:3px;" />
            <div class={`${styles.abs} ${styles.typoRating}`} style="left:21px; top:0px; width:23px; height:22px;">4.5</div>
          </div>
          <div class={`${styles.abs} ${styles.bg1}`} style="left:161px; top:201px; width:24px; height:24px; border-radius:12px; opacity:0.12;" />
        </div>

        {/* Bottom Navigation (decorative, non-interactive) */}
        <div class={styles.abs} style="left:0px; top:782px; width:456px; height:90px;">
          <div class={`${styles.abs} ${styles.bg12}`} style="left:0px; top:0px; width:456px; height:90px;" />
          <div class={`${styles.abs} ${styles.bg13}`} style="left:193px; top: -41px; width:82px; height:82px; border-radius:50%;" />
          <div class={styles.abs} style="left:122px; top:0px; width:224px; height:82px;">
            <div class={`${styles.abs} ${styles.bg12}`} style="left:0px; top:0px; width:82px; height:82px; border-radius:50%;" />
            <div class={`${styles.abs} ${styles.bg12}`} style="left:142px; top:0px; width:82px; height:82px; border-radius:50%;" />
          </div>
        </div>

        {/* Bottom icons (placeholders) */}
        <div class={styles.abs} style="left:451px; top:799px; width:24px; height:24px; transform:translateX(-472px);">
          <div class={`${styles.abs} ${styles.bg6}`} style="left:0; top:0; width:24px; height:24px; border-radius:6px; background:rgba(255,255,255,0.9);" />
        </div>
        <div class={styles.abs} style="left:533px; top:799px; width:24px; height:24px; transform:translateX(-472px);">
          <div class={`${styles.abs} ${styles.bg6}`} style="left:0; top:0; width:24px; height:24px; border-radius:12px; background:rgba(255,255,255,0.9);" />
        </div>
        <div class={styles.abs} style="left:714px; top:799px; width:24px; height:24px; transform:translateX(-472px);">
          <div class={`${styles.abs} ${styles.bg6}`} style="left:0; top:0; width:24px; height:24px; border-radius:4px; background:rgba(255,255,255,0.9);" />
        </div>

        {/* Floating action + accessories */}
        <div class={`${styles.abs} ${styles.dot18}`} style="left: -401px; top: 734px; width:72px; height:72px; border-radius:50%;" />
        <div class={styles.abs} style="left: -373px; top: 762px; width:16px; height:16px;">
          <div style="position:absolute; left:0; top:8px; width:16px; height:0; border-top:5px solid #ffffff;" />
          <div style="position:absolute; left:8px; top:0; height:16px; width:0; border-left:5px solid #ffffff;" />
        </div>
        <div class={`${styles.abs} ${styles.bg6}`} style="left: -154px; top: 799px; width:24px; height:24px; border-radius:12px; background:rgba(255,255,255,0.9);" />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Pixel-accurate conversion of Figma home screen using Qwik components, with elegant Ocean Professional theme accents.',
    },
  ],
};
