const { expect } = require('@wdio/globals');
const apiClient = require('../pageobjects/api.class');

describe('API Tests', () => {

    it('should GET a resource successfully', async () => {
        const response = await apiClient.get('/productsList');
        
        expect(response.status).toBe(200); // status code assertion
        expect(response.data.products[0]).toHaveProperty('id', 1); // body assertion
    });

    it('should POST a new resource', async () => {
         const payload = new URLSearchParams()
        payload.append('search_product', 'top')
        const response = await apiClient.post('/verifyLogin', payload);
        
        expect(response.status).toBe(200);
        response.data.products.forEach(product => {
            expect(product.name.toLowerCase()).toContain('top')
        })
    });

});
