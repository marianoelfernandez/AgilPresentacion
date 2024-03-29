class DiscountService {
    private discounts: Record<string, number> = {
        estudiante: 0.2,
        jubilado: 0.15,
        empleado: 0.1,
    };

    getDiscount(category: string, price: number): number {
        const discountRate = this.discounts[category] || 0;
        return price * discountRate;
    }
}
