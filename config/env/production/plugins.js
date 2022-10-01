module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SEND_GRID'),
        },
        settings: {
          defaultFrom: 'medinalakerealty@aol.com',
          defaultReplyTo: 'medinalakerealty@aol.com',
        },
      },
    },
    // ...
  });