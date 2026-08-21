<script>
import { VPLink } from 'vitepress/theme';
import SiteIcon from './SiteIcon.vue';

export default {
    components: {
        VPLink,
        SiteIcon
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
        },
        description: {
            type: String,
            required: false,
            default: ''
        }
    },
    computed: {
        linkLabel() {
            const suffix = this.target === '_blank' ? '，在新窗口打开' : ''
            return `${this.title}${suffix}`
        }
    }
};
</script>

<template>
    <VPLink class="card" :href="link" :target="target === '_blank' ? '_blank' : null"
        :rel="target === '_blank' ? 'noopener noreferrer' : null" :aria-label="linkLabel">
        <div class="content">
            <h3 class="title">
                <SiteIcon class="icon" :icon="icon" :src="iconSrc" />
                <span>{{ title }}</span>
            </h3>
            <p class="description">
                {{ description }}
            </p>
        </div>
    </VPLink>
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
    cursor: pointer;
    text-decoration: none;
}

.card:hover {
    border-color: var(--vp-c-brand-1);
}

.card:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
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


.jumpbutton:hover {
    background-color: var(--vp-c-brand-1);
    color: var(--vp-c-bg);
}
</style>
