const invoices = [
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'BNL Inc.',
    invoiceNo: 'INV-120',
    invoiceDate: 'Aug 14',
    amount: '$630.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'ACME',
    invoiceNo: 'INV-121',
    invoiceDate: 'Aug 15',
    amount: '$640.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'NASA',
    invoiceNo: 'INV-122',
    invoiceDate: 'Aug 16',
    amount: '$650.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'Jason Greene',
    invoiceNo: 'INV-123',
    invoiceDate: 'Aug 17',
    amount: '$660.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'SpaceX',
    invoiceNo: 'INV-124',
    invoiceDate: 'Aug 18',
    amount: '$670.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'JPL',
    invoiceNo: 'INV-125',
    invoiceDate: 'Aug 19',
    amount: '$680.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'ESA',
    invoiceNo: 'INV-126',
    invoiceDate: 'Aug 20',
    amount: '$690.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'Roscosmos',
    invoiceNo: 'INV-127',
    invoiceDate: 'Aug 21',
    amount: '$700.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'BNL Inc.',
    invoiceNo: 'INV-128',
    invoiceDate: 'Aug 22',
    amount: '$710.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'ACME',
    invoiceNo: 'INV-129',
    invoiceDate: 'Aug 23',
    amount: '$720.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'NASA',
    invoiceNo: 'INV-130',
    invoiceDate: 'Aug 24',
    amount: '$730.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'Jason Greene',
    invoiceNo: 'INV-131',
    invoiceDate: 'Aug 25',
    amount: '$740.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'SpaceX',
    invoiceNo: 'INV-132',
    invoiceDate: 'Aug 26',
    amount: '$750.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'JPL',
    invoiceNo: 'INV-133',
    invoiceDate: 'Aug 27',
    amount: '$760.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'ESA',
    invoiceNo: 'INV-134',
    invoiceDate: 'Aug 28',
    amount: '$770.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'Roscosmos',
    invoiceNo: 'INV-135',
    invoiceDate: 'Aug 29',
    amount: '$780.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'BNL Inc.',
    invoiceNo: 'INV-136',
    invoiceDate: 'Aug 30',
    amount: '$790.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'ACME',
    invoiceNo: 'INV-137',
    invoiceDate: 'Aug 31',
    amount: '$800.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'NASA',
    invoiceNo: 'INV-138',
    invoiceDate: 'Sep 1',
    amount: '$810.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'Jason Greene',
    invoiceNo: 'INV-139',
    invoiceDate: 'Sep 2',
    amount: '$820.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'SpaceX',
    invoiceNo: 'INV-140',
    invoiceDate: 'Sep 3',
    amount: '$830.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'JPL',
    invoiceNo: 'INV-141',
    invoiceDate: 'Sep 4',
    amount: '$840.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'ESA',
    invoiceNo: 'INV-142',
    invoiceDate: 'Sep 5',
    amount: '$850.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'Roscosmos',
    invoiceNo: 'INV-143',
    invoiceDate: 'Sep 6',
    amount: '$860.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'BNL Inc.',
    invoiceNo: 'INV-144',
    invoiceDate: 'Sep 7',
    amount: '$870.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'ACME',
    invoiceNo: 'INV-145',
    invoiceDate: 'Sep 8',
    amount: '$880.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'NASA',
    invoiceNo: 'INV-146',
    invoiceDate: 'Sep 9',
    amount: '$890.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'Jason Greene',
    invoiceNo: 'INV-147',
    invoiceDate: 'Sep 10',
    amount: '$900.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'SpaceX',
    invoiceNo: 'INV-148',
    invoiceDate: 'Sep 11',
    amount: '$910.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'JPL',
    invoiceNo: 'INV-149',
    invoiceDate: 'Sep 12',
    amount: '$920.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'ESA',
    invoiceNo: 'INV-150',
    invoiceDate: 'Sep 13',
    amount: '$930.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'Roscosmos',
    invoiceNo: 'INV-151',
    invoiceDate: 'Sep 14',
    amount: '$940.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'BNL Inc.',
    invoiceNo: 'INV-152',
    invoiceDate: 'Sep 15',
    amount: '$950.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'ACME',
    invoiceNo: 'INV-153',
    invoiceDate: 'Sep 16',
    amount: '$960.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'NASA',
    invoiceNo: 'INV-154',
    invoiceDate: 'Sep 17',
    amount: '$970.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'Jason Greene',
    invoiceNo: 'INV-155',
    invoiceDate: 'Sep 18',
    amount: '$980.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'SpaceX',
    invoiceNo: 'INV-156',
    invoiceDate: 'Sep 19',
    amount: '$990.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'JPL',
    invoiceNo: 'INV-157',
    invoiceDate: 'Sep 20',
    amount: '$1000.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'ESA',
    invoiceNo: 'INV-158',
    invoiceDate: 'Sep 21',
    amount: '$1010.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'Roscosmos',
    invoiceNo: 'INV-159',
    invoiceDate: 'Sep 22',
    amount: '$1020.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'BNL Inc.',
    invoiceNo: 'INV-160',
    invoiceDate: 'Sep 23',
    amount: '$1030.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'ACME',
    invoiceNo: 'INV-161',
    invoiceDate: 'Sep 24',
    amount: '$1040.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'NASA',
    invoiceNo: 'INV-162',
    invoiceDate: 'Sep 25',
    amount: '$1050.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'Jason Greene',
    invoiceNo: 'INV-163',
    invoiceDate: 'Sep 26',
    amount: '$1060.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'SpaceX',
    invoiceNo: 'INV-164',
    invoiceDate: 'Sep 27',
    amount: '$1070.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'JPL',
    invoiceNo: 'INV-165',
    invoiceDate: 'Sep 28',
    amount: '$1080.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'ESA',
    invoiceNo: 'INV-166',
    invoiceDate: 'Sep 29',
    amount: '$1090.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'Roscosmos',
    invoiceNo: 'INV-167',
    invoiceDate: 'Sep 30',
    amount: '$1100.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'BNL Inc.',
    invoiceNo: 'INV-168',
    invoiceDate: 'Oct 1',
    amount: '$1110.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'ACME',
    invoiceNo: 'INV-169',
    invoiceDate: 'Oct 2',
    amount: '$1120.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'NASA',
    invoiceNo: 'INV-170',
    invoiceDate: 'Oct 3',
    amount: '$1130.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'Jason Greene',
    invoiceNo: 'INV-171',
    invoiceDate: 'Oct 4',
    amount: '$1140.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Overdue',
    customer: 'SpaceX',
    invoiceNo: 'INV-172',
    invoiceDate: 'Oct 5',
    amount: '$1150.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Not due yet',
    customer: 'JPL',
    invoiceNo: 'INV-173',
    invoiceDate: 'Oct 6',
    amount: '$1160.00'
  },
  {
    dueDate: 'Sep 16',
    status: 'Paid',
    customer: 'ESA',
    invoiceNo: 'INV-174',
    invoiceDate: 'Oct 7',
    amount: '$1170.00'
  }
];

export default invoices;
