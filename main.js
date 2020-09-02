/* 
Return true if the passed string looks like a valid US phone number. otherwise return false.
*/
/*
The user may fill out the form field any way they choose as long as it has the format of a valid US number.
 The following are examples of valid formats for US numbers (refer to the tests below for other variants):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

*/

function telephoneCheck(str) {


    const validPatterns = [

        // 555-555-555
        /^\d{3}-\d{3}-\d{4}$/,

        //1 555-555-5555
            /^1\d{3}-\d{3}-\d{4}$/,

         //1 (555) 555-5555
               /^1\(\d{3}\) \d{3}-\d{4}$/,  //we're also escaping parenthsesis by putting backslash before each one. Parenthesis mean somthing different in regex

          //5555555555



    ]

    return validPatterns.some((pattern) => pattern.test(str))

}