import NepaliDate from 'nepali-date-converter';

export const convertBSToAD = (bsDate: string): string => {
  const [year, month, day] = bsDate.split('-').map(Number);
  
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error('Invalid date format');
  }
  
  try {
    // Create NepaliDate directly with BS date
    const nepaliDate = new NepaliDate(year, month - 1, day); // month is 0-based
    const adDate = nepaliDate.toJsDate();
    
    return `${adDate.getFullYear()}-${String(adDate.getMonth() + 1).padStart(2, '0')}-${String(adDate.getDate()).padStart(2, '0')}`;
  } catch (error) {
    throw new Error('Invalid date or date out of range');
  }
};

export const convertADToBS = (adDate: string): string => {
  const [year, month, day] = adDate.split('-').map(Number);
  
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error('Invalid date format');
  }
  
  try {
    const adDateTime = new Date(year, month - 1, day);
    const nepaliDate = new NepaliDate(adDateTime);
    
    return `${nepaliDate.getYear()}-${String(nepaliDate.getMonth() + 1).padStart(2, '0')}-${String(nepaliDate.getDate()).padStart(2, '0')}`;
  } catch (error) {
    throw new Error('Invalid date or date out of range');
  }
};