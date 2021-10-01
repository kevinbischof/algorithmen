export interface GoogleBook {
  kind: string
  totalItems: number
  items?: ItemsEntity[] | null
}
export interface ItemsEntity {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
}
export interface VolumeInfo {
  title: string
  subtitle: string
  authors?: string[] | null
  publishedDate: string
  industryIdentifiers?: IndustryIdentifiersEntity[] | null
  readingModes: ReadingModes
  pageCount: number
  printType: string
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: PanelizationSummary
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}
export interface IndustryIdentifiersEntity {
  type: string
  identifier: string
}
export interface ReadingModes {
  text: boolean
  image: boolean
}
export interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}
export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
}
export interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: EpubOrPdf
  pdf: EpubOrPdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}
export interface EpubOrPdf {
  isAvailable: boolean
}
