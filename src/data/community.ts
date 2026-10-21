export interface CommunityEvent{titleZh:string;titleEn:string;date:string;venueZh:string;venueEn:string;typeZh:string;typeEn:string}
export interface Promotion{titleZh:string;titleEn:string;businessZh:string;businessEn:string;validUntil:string;descriptionZh:string;descriptionEn:string}
export const communityEvents:CommunityEvent[]=[
{titleZh:"会员交流早餐会",titleEn:"Member Networking Breakfast",date:"2026-11-08",venueZh:"新山中华公会大厦",venueEn:"JBCCCI Building",typeZh:"会员活动",typeEn:"Member Event"},
{titleZh:"柔佛商业地皮与投资分享会",titleEn:"Johor Commercial Land & Investment Briefing",date:"2026-11-21",venueZh:"新山市中心",venueEn:"Johor Bahru City Centre",typeZh:"讲座",typeEn:"Seminar"},
{titleZh:"中小企业数码化工作坊",titleEn:"SME Digitalisation Workshop",date:"2026-12-05",venueZh:"线上与实体同步",venueEn:"Hybrid",typeZh:"课程",typeEn:"Workshop"}];
export const promotions:Promotion[]=[
{titleZh:"会员宴会配套优惠",titleEn:"Member Banquet Package",businessZh:"新味宴宾楼",businessEn:"Xin Wei Banquet House",validUntil:"2026-12-31",descriptionZh:"商会会员预订企业宴会可享指定配套优惠。",descriptionEn:"Special corporate banquet packages for chamber members."},
{titleZh:"企业茗茶礼盒预订",titleEn:"Corporate Tea Gift Pre-order",businessZh:"南岭茶庄",businessEn:"Nanling Tea Traders",validUntil:"2026-12-15",descriptionZh:"企业订购精选茗茶礼盒，可定制公司礼套。",descriptionEn:"Custom corporate sleeves available for selected tea gift sets."},
{titleZh:"工业地皮首次咨询",titleEn:"Industrial Land First Consultation",businessZh:"南方置地顾问",businessEn:"Southern Acre Properties",validUntil:"2027-01-31",descriptionZh:"会员企业可预约一次工业地皮需求初步咨询。",descriptionEn:"Member businesses may book an initial industrial land consultation."}];
