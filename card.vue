<template>
    <div class="card">
        <h3>
            <a :href="link">{{ title }}</a>
        </h3>
        <p>{{ description }}</p>
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
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    background-color: #f9f9f9;
}

.card h3 {
    margin: 0 0 8px;
}

.card a {
    text-decoration: none;
    color: #007acc;
}

.card p {
    margin: 0;
    color: #555;
}
</style>