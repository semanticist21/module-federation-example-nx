import { counter } from '@federation-react/util';
import { z } from 'zod';

const genId = counter();

export const serviceItemSchema = z.object({
  id: z.string(),
  svcCode: z.string(),
  svc_name: z.string(),
  svcSign: z.string(),
  svcCategory: z.enum(['유선', '무선']),
  svgUsageCategory: z.enum(['채널검색', '통합검색']),
});

export type serviceItemType = z.infer<typeof serviceItemSchema>;

export const SERVICE_MOCK_DATA: serviceItemType[] = [
  {
    id: genId(),
    svcCode: 'SVC001',
    svc_name: 'SHOP',
    svcSign: '올레샵',
    svcCategory: '유선',
    svgUsageCategory: '채널검색',
  },
  {
    id: genId(),
    svcCode: 'SVC001',
    svc_name: 'SHOP',
    svcSign: '올레샵',
    svcCategory: '유선',
    svgUsageCategory: '채널검색',
  },
  {
    id: genId(),
    svcCode: 'SVC001',
    svc_name: 'SHOP',
    svcSign: '올레샵',
    svcCategory: '무선',
    svgUsageCategory: '통합검색',
  },
  {
    id: genId(),
    svcCode: 'SVC004',
    svc_name: 'MEDIA',
    svcSign: 'KT Media',
    svcCategory: '무선',
    svgUsageCategory: '채널검색',
  },
  {
    id: genId(),
    svcCode: 'SVC005',
    svc_name: 'BROADBAND',
    svcSign: 'KT Broadband',
    svcCategory: '유선',
    svgUsageCategory: '통합검색',
  },
  {
    id: genId(),
    svcCode: 'SVC006',
    svc_name: 'MOBILE',
    svcSign: 'KT Mobile',
    svcCategory: '무선',
    svgUsageCategory: '채널검색',
  },
  {
    id: genId(),
    svcCode: 'SVC007',
    svc_name: 'CLOUD',
    svcSign: 'KT Cloud',
    svcCategory: '유선',
    svgUsageCategory: '채널검색',
  },
  {
    id: genId(),
    svcCode: 'SVC008',
    svc_name: 'IoT',
    svcSign: 'KT IoT',
    svcCategory: '무선',
    svgUsageCategory: '통합검색',
  },
  {
    id: genId(),
    svcCode: 'SVC009',
    svc_name: 'HOME',
    svcSign: 'KT Home',
    svcCategory: '유선',
    svgUsageCategory: '채널검색',
  },
  {
    id: genId(),
    svcCode: 'SVC010',
    svc_name: 'WORK',
    svcSign: 'KT Work',
    svcCategory: '무선',
    svgUsageCategory: '통합검색',
  },
  {
    id: genId(),
    svcCode: 'SVC010',
    svc_name: 'WORK',
    svcSign: 'KT Work',
    svcCategory: '무선',
    svgUsageCategory: '통합검색',
  },
];

export const SVC_CATEGORY_OPTIONS = [
  { label: '유선', value: '유선' },
  { label: '무선', value: '무선' },
  { label: '모두', value: '' },
];

export const SVG_USAGE_CATEGORY_OPTIONS = [
  { label: '채널검색', value: '채널검색' },
  { label: '통합검색', value: '통합검색' },
  { label: '모두', value: '' },
];
