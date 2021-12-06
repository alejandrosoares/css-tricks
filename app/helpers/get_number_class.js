function* getClassNumber() {
   /*
    Generator of number class for .post
    @return: int
    */
   const maxNumberClass = 9;
   let i = 1;

   while (true) {
      yield i;

      if (i === maxNumberClass) i = 0;

      i++;
   }
}

const classNumberIterator = getClassNumber();

export default classNumberIterator;
