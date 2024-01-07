// OtherFile.js

// Use 'app' as needed in your application

// next.config.js
const nextConfig = {
    reactStrictMode: true,
    // output: 'export',

    images: {
        domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
    },

    experimental: {
        // Remove the 'appDir' key, as it is not recognized
    },
    env: {
        GOOGLE_CLIENT_ID: "168763935519-m6c1ajon2tpbdnv768ketk6kcuu5hfku.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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",
    },
}
// firebaseConfig.js





module.exports = nextConfig;
