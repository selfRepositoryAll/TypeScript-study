// 这个是namespace 命名空间
//讲之前模块化的东西全 放在命名空间下面
namespace Validation {
    // 需要导出的就需要使用exprot
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    // 这个是不需要导出的 所以export
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    // 请在命名空间之外使用的时候请注意使用方法
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
// 命名空间namespace的使用请注意 :其实就是对象的属性而已
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
});