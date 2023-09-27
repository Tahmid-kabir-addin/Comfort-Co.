export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT',
    }).format(number / 100)
    return newNumber
}

export const getUniqueValues = () => {}
