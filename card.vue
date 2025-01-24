<template>
    <div class="card">
        <div class="card-header">
            <h3>{{ title }}</h3>
        </div>
        <div class="card-body">
            <p>{{ description }}</p>
        </div>
        <div class="card-footer">
            <a :href="link" class="card-button">前往</a>
        </div>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
    height: auto;
    padding: 20px;
    margin: 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    color: #ffffff;
    text-align: left;
    overflow: hidden;
}

.card-header h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
}

.card-body {
    flex: 1;
    margin: 16px 0;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #e0e0e0;
    word-wrap: break-word;
}

.card-footer {
    display: flex;
    justify-content: flex-end;
}

.card-button {
    padding: 8px 16px;
    font-size: 0.95rem;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    background-color: #007bff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.5);
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.card-button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.card-button:active {
    background-color: #004085;
    transform: scale(0.95);
}
</style>