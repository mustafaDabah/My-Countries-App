export function formatLanguages(languages: Record<string, string> | undefined) {
    if (!languages) return '—';
    return Object.values(languages).join(', ');
}