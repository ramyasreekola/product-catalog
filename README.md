# Product Catalog
This project is a React-based frontend application showcasing shirts catalog data in a user-friendly dashboard.

## Description
Built with next-create-app, the app efficiently loads and displays shirts catalog data fetched from an external API, presenting it in an interactive and accessible format. The application uses App routing model.


### Built With
[React](https://react.dev/) - A JavaScript library for building user interfaces.
[NextJs](https://nextjs.org/) - React Framework for the Web
[MUI](https://mui.com/) - Google's react based open source UI framework.


### Getting Started
These instructions will get you a copy of the project up and running locally.

#### Installation
Clone the repository :
```bash
git clone [repository URL]
```
Install dependencies and start dev server:

```bash
npm install
npm run dev
```

The application will be available at http://localhost:3000

### Components & Views
In this Application we have the following page views and components

**Home** : Main landing page view displaying the shirts and related products data.

**Product**: Container component for each of the product displayed in the landing page.

**ProductCarousel**: Component for the carousel, navigation and pagination features of the products.

**Product Detail Page**: Page view for the product specific details.

**ProductInfo**: Component for each if the product specific details.

### API
This frontend app fetches data from Base URL: https://staging-api.etonshirts.com/V1/Retail/Catalog/Category endpoint, which is expected to return a JSON array of shirts product records,that contains along with other information- product variants and color options and price related information. This information is used for the Landing and Product Detail Page Layout in the application. For Simplicity purpose, the API search parameters are added to the code.

### Features
* Display a list of shirts catalog data in a clean and precise format.
* Responsive design for optimal viewing on various devices and screen sizes.
* Error handling to gracefully manage and notify users of any data fetching issues.
* Supports product carousel feature which provides a simple yet elegant way of showing the product data.
* Pagination and navigation support for the carousel product items.
* UI to handle loading state of the application while the API data fetch is still loading.
* React Context for global state management - and reusing the API data to reduce number of server requests.
* Using Next Js latest recommondation of App router for dynamic routing.

#### TODO

* Implement the API data fetch logic so that the query parameters are configurable. 
* Add unit tests for the frontend code.
* For color variants - clicking each of them shoukd ideally navigate to a new page, but the data to be displayed is unknown - this usecase is skipped.
* Image load optimization - using eager loading to mitigate client side load times.

Authors

[Ramya Sree Kola](https://ramyasreekola.github.io/Portfolio/)



