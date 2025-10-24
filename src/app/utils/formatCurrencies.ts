export function formatCurrencies(currencies: Record<string, Currency> | undefined) {
    if (!currencies) return '—';
    return Object.values(currencies)
        .map((c: Currency) => `${c.name}${c.symbol ? ` (${c.symbol})` : ''}`)
        .join(', ');
}