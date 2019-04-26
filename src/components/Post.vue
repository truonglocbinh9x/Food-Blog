<template>
  <div class="creatives-grid">
    <a :href="`/posts/${post.id}`">
      <img :src="post.heading_img" alt=" " class="img-fluid">
    </a>
    <div class="p-mask img-thumbnail">
      <h4>
        <a :href="`/posts/${post.id}`">{{ post.title }}</a>
      </h4>
      <span class="let mt-3">{{ post.created_at }}</span>
      <hr>
      <p>
        {{ post.content }}
      </p>
      <a :href="`/posts/${post.id}`" class="btn button-style-w3ls mt-4">Read More</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: { type: Object, default: () => {}, require: true }
  }
};
</script>
