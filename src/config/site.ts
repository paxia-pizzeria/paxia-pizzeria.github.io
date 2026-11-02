/**
 * Configurazione della landing.
 *
 * Sta accanto a quella del gioco e ha la stessa forma: valori nudi, nessuna
 * logica, pronti a essere letti da Sanity il giorno che il CMS arriva.
 */
export interface SiteConfig {
  /** Il testo alternativo del marchio, per chi la pagina la ascolta. */
  readonly marchioAlt: string;
  /** L'invito a giocare, accanto alla tavola. */
  readonly cue: string;
}

export const SITE_CONFIG: SiteConfig = {
  marchioAlt: 'PAXIENTA',
  cue: "Nell'attesa gioca",
};
