import '../css/root.css'

export const themes = {
  light: {
    color: 'var(--black)',
    bgPrimary: 'var(--primary-light)',
    bgColor: 'var(--color-gray-50)',
    bgCard: 'var(--theme-card-light)',
    bgInfo: 'var(--bgInput-light)',
    hover: 'var(--blue-marine)',
    hoverCard: 'var(--color-gray-300)',
    hoverCardActive: 'var(--color-gray-800)'
  },
  dark: {
    color: 'var(--white)',
    bgPrimary: 'var(--primary-dark)',
    bgColor: 'var(--color-gray-800)',
    bgCard: 'var(--theme-card-dark)',
    bgInfo: 'var(--bgInput-dark)',
    hover: 'var(--yellow-gold)',
    hoverCard: 'var(--color-gray-900)',
    hoverCardActive: 'var(--color-gray-500)'
  }
}