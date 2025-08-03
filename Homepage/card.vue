<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        target: {
            type: String,
            required: false,
            default: '_self'
        }
    }
};
</script>

<template>
    <div class="card">
        <div class="content">
            <h3 class="title">{{ title }}</h3>
            <p class="description">
                <slot name="description"></slot>
            </p>
        </div>
        <a :href="link" :target="target" class="button">
            前往查看
        </a>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 13rem;
    padding: 1.5rem;
    background: var(--vp-custom-block-info-bg);
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    transition: border-color 0.3s ease-in-out;
    color: var(--vp-c-text-1);
}

.card:hover {
    border-color: var(--vp-c-brand-1);
}

.title {
    margin: 0 0 0.75rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.description {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--vp-c-text-2);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
}

.button {
    align-self: flex-start;
    margin-top: 1.25rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
    border-radius: 6px;
    text-decoration: none;
    text-align: center;
    font-weight: 500;
    transition: background-color 0.3s, color 0.3s;
}

.button:hover {
    background-color: var(--vp-c-brand-1);
    color: var(--vp-c-bg);
}
</style>
