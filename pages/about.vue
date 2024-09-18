<template>
  <div>
    <h1>About the bug</h1>
    <td class="d-block comment-body markdown-body  js-comment-body">
      <h3 dir="auto">Environment</h3>
      <ul dir="auto">
      <li>Operating System: Darwin</li>
      <li>Node Version:     v20.10.0</li>
      <li>Nuxt Version:     3.13.1</li>
      <li>CLI Version:      3.13.1</li>
      <li>Nitro Version:    2.9.7</li>
      <li>Package Manager:  npm@10.2.3</li>
      <li>Builder:          -</li>
      <li>User Config:      app, compatibilityDate, devtools</li>
      <li>Runtime Modules:  -</li>
      <li>Build Modules:    -</li>
      </ul>
      <p dir="auto">also noticed in <code class="notranslate">3.12.1</code>.</p>
      <h3 dir="auto">Reproduction</h3>
      <p dir="auto"><a href="https://github.com/simonhrogers/transition-no-worky">https://github.com/simonhrogers/transition-no-worky</a></p>
      <h3 dir="auto">Describe the bug</h3>
      <p dir="auto">Layout transitions are not retaining correct scroll position. Page transitions do.</p>
      <p dir="auto">Navigate from the about page to the home page here, the home page is already partially scrolled:</p>
      <p dir="auto"><a href="https://layout-transition-no-worky-nuxt3.netlify.app/about" rel="nofollow">https://layout-transition-no-worky-nuxt3.netlify.app/about</a></p>
      <p dir="auto">I can provide further demonstration if needed. Written explanation below, as well as written explanation of the behaviour I would expect, which occurs correctly without layout transitions.</p>
      <p dir="auto">I open my website. I scroll down 200px. I click a NuxtLink. The browser navigates to the new page. The new page is already scrolled 200px from the top. I scroll up 52px. I click on Chrome’s back button. It takes me back to the index page, which is scrolled down 148px.</p>
      <p dir="auto">This is not the default behaviour of the website, which operates correctly without layout transitions. But it is happening between layout transitions.</p>
      <p dir="auto">How can I make the default behaviour occur? The desired behaviour is as follows:</p>
      <p dir="auto">I open my website. I scroll down 200px. I click a NuxtLink. The browser navigates to the new page. The new page is at the top – scroll distance: 0px. I scroll down 250px. I click on Chrome’s back button. It takes me back to the index page, which is scrolled down 200px, exactly where I left it.</p>
      <p dir="auto">Thank you!</p>
      <h3 dir="auto">Additional context</h3>
      <p dir="auto"><em>No response</em></p>
      <h3 dir="auto">Logs</h3>
      <p dir="auto"><em>No response</em></p>
    </td>
    <h1>About The Ice Cream Tiger</h1>
    <p><span class="highlight">The Ice Cream Tiger</span> is a legendary figure in the jungle, bringing sweet, cool relief to all the creatures craving a treat on hot summer days.</p>
    <p>With a roar that echoes through the trees, the Ice Cream Tiger delivers a wide variety of ice cream flavors to animals in places where there’s no ice cream shop in sight.</p>
    <p>From monkeys to leopards and even the birds up high, everyone loves the Ice Cream Tiger. Always on the move, this ice cream-loving tiger spreads joy and sweetness wherever it goes.</p>
    <p>So next time you're in the jungle and hear that roar, know that the <span class="highlight">Ice Cream Tiger</span> is near, bringing happiness one scoop at a time!</p>
    <NuxtLink class="nuxt-link" to="/">Home</NuxtLink>
    <h1>Dog</h1>
    <p><span class="highlight">The Ice Cream Tiger</span> is a legendary figure in the jungle, bringing sweet, cool relief to all the creatures craving a treat on hot summer days.</p>
    <p>With a roar that echoes through the trees, the Ice Cream Tiger delivers a wide variety of ice cream flavors to animals in places where there’s no ice cream shop in sight.</p>
    <p>From monkeys to leopards and even the birds up high, everyone loves the Ice Cream Tiger. Always on the move, this ice cream-loving tiger spreads joy and sweetness wherever it goes.</p>
    <p>So next time you're in the jungle and hear that roar, know that the <span class="highlight">Ice Cream Tiger</span> is near, bringing happiness one scoop at a time!</p>
    <NuxtLink class="nuxt-link" to="/">Home</NuxtLink>
    <h1>Cat</h1>
    <p><span class="highlight">The Ice Cream Tiger</span> is a legendary figure in the jungle, bringing sweet, cool relief to all the creatures craving a treat on hot summer days.</p>
    <p>With a roar that echoes through the trees, the Ice Cream Tiger delivers a wide variety of ice cream flavors to animals in places where there’s no ice cream shop in sight.</p>
    <p>From monkeys to leopards and even the birds up high, everyone loves the Ice Cream Tiger. Always on the move, this ice cream-loving tiger spreads joy and sweetness wherever it goes.</p>
    <p>So next time you're in the jungle and hear that roar, know that the <span class="highlight">Ice Cream Tiger</span> is near, bringing happiness one scoop at a time!</p>
    <NuxtLink class="nuxt-link" to="/">Home</NuxtLink>
    <h1>Fish</h1>
    <p><span class="highlight">The Ice Cream Tiger</span> is a legendary figure in the jungle, bringing sweet, cool relief to all the creatures craving a treat on hot summer days.</p>
    <p>With a roar that echoes through the trees, the Ice Cream Tiger delivers a wide variety of ice cream flavors to animals in places where there’s no ice cream shop in sight.</p>
    <p>From monkeys to leopards and even the birds up high, everyone loves the Ice Cream Tiger. Always on the move, this ice cream-loving tiger spreads joy and sweetness wherever it goes.</p>
    <p>So next time you're in the jungle and hear that roar, know that the <span class="highlight">Ice Cream Tiger</span> is near, bringing happiness one scoop at a time!</p>
    <NuxtLink class="nuxt-link" to="/">Home</NuxtLink>
    <h1>Donkey</h1>
    <p><span class="highlight">The Ice Cream Tiger</span> is a legendary figure in the jungle, bringing sweet, cool relief to all the creatures craving a treat on hot summer days.</p>
    <p>With a roar that echoes through the trees, the Ice Cream Tiger delivers a wide variety of ice cream flavors to animals in places where there’s no ice cream shop in sight.</p>
    <p>From monkeys to leopards and even the birds up high, everyone loves the Ice Cream Tiger. Always on the move, this ice cream-loving tiger spreads joy and sweetness wherever it goes.</p>
    <p>So next time you're in the jungle and hear that roar, know that the <span class="highlight">Ice Cream Tiger</span> is near, bringing happiness one scoop at a time!</p>
    <NuxtLink class="nuxt-link" to="/">Home</NuxtLink>
    <h1>Tuna</h1>
    <p><span class="highlight">The Ice Cream Tiger</span> is a legendary figure in the jungle, bringing sweet, cool relief to all the creatures craving a treat on hot summer days.</p>
    <p>With a roar that echoes through the trees, the Ice Cream Tiger delivers a wide variety of ice cream flavors to animals in places where there’s no ice cream shop in sight.</p>
    <p>From monkeys to leopards and even the birds up high, everyone loves the Ice Cream Tiger. Always on the move, this ice cream-loving tiger spreads joy and sweetness wherever it goes.</p>
    <p>So next time you're in the jungle and hear that roar, know that the <span class="highlight">Ice Cream Tiger</span> is near, bringing happiness one scoop at a time!</p>
    <NuxtLink class="nuxt-link" to="/">Home</NuxtLink>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'default'
})

</script>

<style scoped>

.nuxt-link {
  font-size: 2.5em;
  color: magenta
}

</style>