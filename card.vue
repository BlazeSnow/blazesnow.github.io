<template>
    <div style="padding-top: 12px;">
        <a :href="link" class="card">
            <p class="card-header">
                {{ title }}
            </p>
            <p class="card-body">
                {{ description }}
            </p>
        </a>
    </div>

</template>

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
        description: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
.card {
    box-sizing: border-box;
    width: auto;
    height: auto;
    background: var(--vp-custom-block-info-bg);
    border: 1px solid lightgrey;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: var(--vp-custom-block-info-text);
    text-decoration-line: none;
    margin-top: 10px;
    margin-bottom: 10px;
}

.card:hover {
    border: 1px solid #0080FF;
    transform: scale(1.05);
}

.card:active {
    transform: scale(0.95);
}

.card-header {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 25px;
    margin-right: auto;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: left;
}

.card-body {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: 25px;
    font-size: 0.9rem;
    font-weight: normal;
    line-height: 1.5;
    text-align: right;
}
</style>