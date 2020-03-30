/**
 * 现在要配置一台电脑，
 * 需要主板、内存和cpu，
 * 主板有名字和型号，有通电的功能，
 * 内存有名字和型号可以存储数据、
 * cpu有名字和型号可以进行计算。
 * 请使用面向对象完成 主板通电后，内存和cpu运转的过程。
 */
class Common {
    constructor(name, model) {
        this.name = name
        this.model = model
    }
}
class MainBoard extends Common {
    constructor(name, model) {
        super(...arguments)
    }
    electrify() {
        console.info("正在通电......")
        console.info("通电成功！")
    }
}
class Storage extends Common {
    constructor(name, model) {
        super(...arguments)
    }
    storeData() {
        console.info("正在储存数据......")
        console.info("储存成功！")
    }
}
class Cpu extends Common {
    constructor(name, model) {
        super(...arguments)
    }
    calculate() {
        console.info("正在计算......")
        console.info("计算完毕！")
    }
}

class Computer extends Common {
    constructor(name) {
        super(...arguments)
        this.allocation = []
    }
    run() {
        this.allocation[0].electrify()
        this.allocation[1].storeData()
        this.allocation[2].calculate()
    }
}
var myComputer = new Computer("ASUS", "k555lJ")
var myMainBoard = new MainBoard("ASUS", "X555LJ")
var myStorage = new Storage("Kingston", "DDR3L 8G")
var myCpu = new Cpu("interCore", "i5-5200U")
myComputer.allocation.push(myMainBoard)
myComputer.allocation.push(myStorage)
myComputer.allocation.push(myCpu)
myComputer.run()