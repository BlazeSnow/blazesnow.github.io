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
        }
    }
};
</script>

<template>
    <div style="padding-top: 12px;">
        <a :href="link" class="card">
            <p class="title">
                {{ title }}
            </p>
            <p class="divider"></p>
            <div class="description">
                <slot name="description"></slot>
            </div>
        </a>
    </div>
</template>

<style scoped>
.card {
    box-sizing: border-box;
    width: auto;
    height: auto;
    background: var(--vp-custom-block-info-bg);
    border: 1px solid lightgrey;
    box-shadow: 10px 12px 15px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    color: var(--vp-custom-block-info-text);
    text-decoration-line: none;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.card:hover {
    border: 1px solid #0080FF;
    transform: scale(1.05);
}

.card:active {
    transform: scale(0.95);
}

.title {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    margin-left: 1.25rem;
    margin-right: auto;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
}

.divider {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
}

.description {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    margin-left: auto;
    margin-right: 1.25rem;
    font-size: 0.9rem;
    font-weight: normal;
    line-height: 1.6;
    text-align: right;
    word-break: break-word;
}
</style>