<template>
  <div class="home">
    <p>All the creatures in the jungle</p>
    <p>When they are craving something sweet</p>
    <p>They call i-ee-i-ee-i-ee-i-ee-ice cream tiger</p>
    <p>See the monkeys and the leopards</p>
    <p>And the birds up in the trees</p>
    <p>They call i-ee-i-ee-i-ee-i-ee-ice cream tiger</p>
    <p>Can you hear that roar? Ice cream tiger</p>
    <p>Bringing the treats to where there is no ice cream shop</p>
    <p>Everybody loves that ice cream tiger (tiger, tiger)</p>
    <p>Can you hear that roar? Ice cream tiger</p>
    <p>So many flavors, more than you can count</p>
    <p>Say hurray for the ice cream tiger (tiger, tiger)</p>
    <p>Ice cream tiger (i-ee-i-ee-i-ee-i-ee-i)</p>
    <p>(I-ee-i-ee-i-ee-i-ee-i)</p>
    <p>In the heat of the summer</p>
    <p>The animals need relief</p>
    <p>They're looking for the i-ee-i-ee-i-ee-i-ee-ice cream tiger (tiger, tiger, tiger)</p>
    <p>Can you hear that roar? Ice cream tiger</p>
    <p>Bringing the treats to where there is no ice cream shop</p>
    <p>Everybody loves that ice cream tiger (tiger, tiger)</p>
    <p>Can you hear that roar? Ice cream tiger</p>
    <p>So many flavors, more than you can count</p>
    <p>Say hurray for the ice cream tiger (tiger, tiger)</p>
    <p>Can you hear that roar? Ice cream tiger</p>
    <p>Tiger, tiger, tiger, oh-oh-oh</p>
    <p>Ice cream tiger (tiger, tiger, tiger)</p>
    <p>Ice cream tiger (i-ee-i-ee-i-ee-i-ee-i)</p>
    <p>(I-ee-i-ee-i-ee-i-ee-i)</p>
    <br />
    <p>All the creatures in the jungle</p>
    <p>When they are craving something sweet</p>
    <p>They call i-ee-i-ee-i-ee-i-ee-ice cream tiger</p>
    <p>See the monkeys and the leopards</p>
    <p>And the birds up in the trees</p>
    <p>They call i-ee-i-ee-i-ee-i-ee-ice cream tiger</p>
    <p>Can you hear that roar? Ice cream tiger</p>
    <p>Bringing the treats to where there is no ice cream shop</p>
    <p>Everybody loves that ice cream tiger (tiger, tiger)</p>
    <p>Can you hear that roar? Ice cream tiger</p>
    <p>So many flavors, more than you can count</p>
    <p>Say hurray for the ice cream tiger (tiger, tiger)</p>
    <p>Ice cream tiger (i-ee-i-ee-i-ee-i-ee-i)</p>
    <p>(I-ee-i-ee-i-ee-i-ee-i)</p>
    <p>In the heat of the summer</p>
    <p>The animals need relief</p>
    <p>They're looking for the i-ee-i-ee-i-ee-i-ee-ice cream tiger (tiger, tiger, tiger)</p>
    <p>Can you hear that roar? Ice cream tiger</p>
    <p>Bringing the treats to where there is no ice cream shop</p>
    <p>Everybody loves that ice cream tiger (tiger, tiger)</p>
    <p>Can you hear that roar? Ice cream tiger</p>
    <p>So many flavors, more than you can count</p>
    <p>Say hurray for the ice cream tiger (tiger, tiger)</p>
    <p>Can you hear that roar? Ice cream tiger</p>
    <p>Tiger, tiger, tiger, oh-oh-oh</p>
    <p>Ice cream tiger (tiger, tiger, tiger)</p>
    <p>Ice cream tiger (i-ee-i-ee-i-ee-i-ee-i)</p>
    <p>(I-ee-i-ee-i-ee-i-ee-i)</p>
    <NuxtLink to="/about" class="make-link-unmissable">About</NuxtLink>
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
    <img src="/tiger.jpg" class="lazyload" alt="The Icecream Tiger" />
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'home'
})

</script>

<style scoped>

.make-link-unmissable {
  position: fixed;
  top: 0;
  right: 0;
  font-size: 10em;
  color: magenta;
}

img {
  margin-top: 1em;
  max-width: 600px;
  width: 100%;
  height: auto;
  display: block;
}

</style>