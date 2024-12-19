<script>
    import { onMount } from "svelte";
    import "../app.css"
    import { loaded } from "$lib/stores";

    onMount(() => {$loaded = true})
</script>

<style lang="postcss">
    :global(html) {
        background-color: black;
    }

    :global(*) {
        @apply text-primary
    }
    :global(h1, p, button, a) {
        @apply font-nunito
    }
    :global(math) {
        @apply font-computer-modern
    }
</style>

<slot />