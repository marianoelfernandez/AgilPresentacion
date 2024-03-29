class DiscountService {
    getDiscount(category: string, price: number): number {
        if (category === 'estudiante') {
            return price * 0.2;
        } else if (category === 'jubilado') {
            return price * 0.15;
        } else if (category === 'empleado') {
            return price * 0.1;
        } else {
            return 0;
        }
    }
}
