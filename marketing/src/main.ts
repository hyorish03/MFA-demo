import { defineCustomElement } from 'vue';
import MarketingHeader from './components/MarketingHeader.vue';

const MarketingHeaderElement = defineCustomElement(MarketingHeader);
customElements.define('marketing-header', MarketingHeaderElement);