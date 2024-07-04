//Copyright (C) 2024 BlazeSnow
//保留所有权利
//本程序以GNU General Public License v3.0的条款发布
#include <iostream>
#include <algorithm>

using namespace std;

//数据存放
int number[4] = {0};
//符号存放
const char Symbol[4] = {'+', '-', '*', '/'};
//统计算了多少次
int times = 0;

//输入4个数据
void input() {
    while (true) {
        //记录是否有数据不在范围内
        int error = 0;
        cout << "请输入四个数字(以空格隔开):" << endl;
        for (auto &i: number) {
            cin >> i;
            if (!(0 < i && i <= 13)) {
                error++;
            }
        }
        //如果都在范围内
        if (error == 0) {
            break;
        } //如果有不在范围内的数据
        else {
            cout << "ERROR:数字范围应当为1~13" << endl << endl;
        }
    }
}

//运算专用的函数
static int operation(int a, int b, char cul) {
    if (cul == '+') {
        return a + b;
    } else if (cul == '-') {
        return a - b;
    } else if (cul == '*') {
        return a * b;
    } else if ((cul == '/') && (a % b == 0)) {
        return a / b;
    } else {
        return -1000;
    }
}

//括号形式A_B_C_D
static int parenthesis1(int num[], char cul[]) {
    int temp = operation(num[0], num[1], cul[0]);
    temp = operation(temp, num[2], cul[1]);
    return operation(temp, num[3], cul[2]);
}

//括号形式(A_B)_(C_D)
static int parenthesis2(int num[], char cul[]) {
    int step1 = operation(num[0], num[1], cul[0]);
    int step2 = operation(num[2], num[3], cul[2]);
    return operation(step1, step2, cul[1]);
}

int main() {
    cout << "Copyright (C) 2024 BlazeSnow.保留所有权利。" << endl;
    cout << "本程序以GNU General Public License v3.0的条款发布。" << endl << endl;
    cout << "https://github.com/BlazeSnow/24-point-calculation" << endl << endl;
    //输入4个数据
    input();
    //进入函数进行运算
    cout << "有以下结果:" << endl;
    //从小到大排序数组
    sort(number, number + 4);
    //排列组合数字和符号
    do {
        //排列组合符号
        for (char i: Symbol) {
            for (char j: Symbol) {
                for (char k: Symbol) {
                    //定义运算用的加减乘除字符数组
                    char cul[3] = {i, j, k};
                    if (parenthesis1(number, cul) == 24) {
                        cout << "((" << number[0] << cul[0] << number[1] << ") ";
                        cout << cul[1] << number[2] << " )";
                        cout << cul[2] << number[3] << " = 24" << endl;
                        times++;
                    }
                    if (parenthesis2(number, cul) == 24) {
                        cout << "(" << number[0] << cul[0] << number[1] << ") ";
                        cout << cul[1] << " (" << number[2];
                        cout << cul[2] << number[3] << ") = 24" << endl;
                        times++;
                    }
                }
            }
        }
        //最后排列组合数字，然后下一个循环，最后一个循环结束后退出循环
        //用next_permutation排列组合数字并输入主程序中进行运算
    } while (next_permutation(number, number + 4));
    //输出次数
    cout << "共有" << times << "个答案" << endl;
    system("pause");
    return 0;
}