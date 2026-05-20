<script>
import { VPLink } from 'vitepress/theme';
import simpleIcons from '@iconify-json/simple-icons/icons.json';

export default {
    components: {
        VPLink
    },
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false,
            default: ''
        },
        iconSrc: {
            type: String,
            required: false,
            default: ''
        },
        target: {
            type: String,
            required: false,
            default: '_self'
        }
    },
    computed: {
        iconData() {
            return this.icon ? simpleIcons.icons[this.icon] : null;
        }
    }
};
</script>

<template>
    <div class="card">
        <div class="content">
            <h3 class="title">
                <img v-if="iconSrc" class="icon image-icon" :src="iconSrc" alt="" aria-hidden="true">
                <svg v-else-if="iconData" class="icon" aria-hidden="true" viewBox="0 0 24 24" v-html="iconData.body"></svg>
                <span>{{ title }}</span>
            </h3>
            <p class="description">
                <slot name="description"></slot>
            </p>
        </div>
        <VPLink class="jumpbutton" :href="link" :target="target === '_blank' ? '_blank' : null"
            :rel="target === '_blank' ? 'noopener noreferrer' : null">
            前往查看
        </VPLink>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 1.5rem;
    background: var(--vp-custom-block-info-bg);
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    transition: border-color 0.3s ease-in-out;
    color: var(--vp-c-text-1);
    cursor: default;
}

.card:hover {
    border-color: var(--vp-c-brand-1);
}

.title {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin: 0 0 0.75rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.icon {
    flex: 0 0 auto;
    width: 1.35rem;
    height: 1.35rem;
    color: var(--vp-c-brand-1);
}

.image-icon {
    object-fit: contain;
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

.jumpbutton {
    align-self: flex-start;
    margin-top: 1.25rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
    border-radius: 6px;
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
}

.jumpbutton:hover {
    background-color: var(--vp-c-brand-1);
    color: var(--vp-c-bg);
}
</style>
