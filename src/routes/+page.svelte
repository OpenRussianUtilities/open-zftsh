<script lang="ts">
    import { loaded } from "$lib/stores"
    import { renderTex } from "$lib/utils";
    import { Marquee } from "@selemondev/svelte-marquee";
    import Typewriter from "svelte-typewriter"
    import { fade, fly } from "svelte/transition"
    import shuffle from "knuth-shuffle-seeded"
    import CONSTS from "$lib/consts";

    const formulaSpeed = .25
    let renderedBgFormulas : string[] = []
    CONSTS.BG_FORMULAS.forEach(f => {renderedBgFormulas.push(renderTex(f))})
</script>

<div class="relative overflow-x-hidden w-[100vw] h-[100vh]">
    {#if $loaded}
        <span class="
            absolute h-full overflow-y-hidden -z-10 flex flex-col justify-center
            [&_math]:text-4xl
        ">
            {#each [...Array(4).keys()] as y}
            {@const formulaShuffle = shuffle(renderedBgFormulas)}
                <span in:fade|global={{duration: 1000, delay: 2750}} style="--duration: {formulaShuffle.length / formulaSpeed}s;">
                    <Marquee reverse={!!(y%2)} innerClassName="flex items-center gap-24 pr-24 py-8{y==1 ? ' pb-[32rem]' : ''}">
                        {#each formulaShuffle as f}
                            {@html f}
                        {/each}
                    </Marquee>
                </span>
            {/each}
        </span>
        <div class="w-full h-full">
            <span class="
                h-full flex flex-col items-center justify-center gap-y-8
                [&>h1]:text-8xl
            ">
                <h1 class="font-pt font-bold italic" in:fly={{duration: 850, y: -25, delay: 500}}>Пришло время</h1>
                <h1 in:fly={{duration: 850, y: 25, delay: 850}} class="flex gap-8 w-[20ch] h-[1.5ch]">сменить <Typewriter delay={1500} interval={30}><i class="font-mono after:!hidden">zftsh.online</i></Typewriter></h1>

                <p class="text-2xl w-[50%]" in:fly={{duration: 750, y: 15, delay: 1950}}>Много текста Много текста Много текста Много текста Много текста Много текста Много текста Много текста Много текста Много текста Много текста Много текста</p>
                <span class="
                    flex gap-8
                    [&>*]:text-2xl [&>*]:py-4 [&>*]:px-8 [&>*]:border-white [&>*]:border-2 [&>*]:rounded-2xl
                    [&>*]:duration-500 [&>*:hover]:scale-110
                ">
                    <a href="" class="text-black !bg-white" in:fade={{duration: 300, delay: 2300}}>Войти</a>
                    <button class="bg-black" in:fade={{duration: 300, delay: 2450}}>Узнать больше</button>
                </span>
            </span>
        </div>
    {/if}
</div>