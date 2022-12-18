from datetime import datetime

class Logger:
    __NORMAL = '\033[0;37;40m'
    __RED = '\033[1;31;40m'
    __GREEN = '\033[1;32;40m'
    __Yellow = '\033[1;33;40m'
    __BLUE = '\033[1;34;40m'
    __MAGENTA = '\033[1;35;40m'

    def __init__(self, extral_info = ''):
        self.extral_info = extral_info

    def info(self, *s):
        s = [str(ss) for ss in s]
        print(f'{self.__NORMAL}[{str(datetime.now()):26}]  [INFO ] {f"[{self.extral_info}]" if self.extral_info != "" else ""} {" ".join(s)} {self.__NORMAL}')

    def error(self, *s):
        s = [str(ss) for ss in s]
        print(f'{self.__RED}[{str(datetime.now()):26}]  [ERROR] {f"[{self.extral_info}]" if self.extral_info != "" else ""} {" ".join(s)} {self.__NORMAL}')

    def ok(self, *s):
        s = [str(ss) for ss in s]
        print(f'{self.__GREEN}[{str(datetime.now()):26}]  [OK   ] {f"[{self.extral_info}]" if self.extral_info != "" else ""} {" ".join(s)} {self.__NORMAL}')

    def warn(self, *s):
        s = [str(ss) for ss in s]
        print(f'{self.__Yellow}[{str(datetime.now()):26}]  [WARN ] {f"[{self.extral_info}]" if self.extral_info != "" else ""} {" ".join(s)} {self.__NORMAL}')

if __name__ == '__main__':
    log = Logger()
    log.info(123, 1313)
    log.error(123)
    log.warn(123)
    log.ok(123)