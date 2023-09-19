// main.js

const app = Vue.createApp({
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Project 1',
                    description: 'Description of Project 1.',
                    link: 'https://github.com/yourusername/project1',
                },
                // Add more projects as needed
            ],
            contactForm: {
                name: '',
                email: '',
                message: '',
            },
        };
    },
    methods: {
        submitForm() {
            // Add your form submission logic here
            // You can access form data in this.contactForm
        },
    },
});

app.mount('#app');
