# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
const1 = Constellation.create! name: 'Team'
const2 = Constellation.create! name: 'Personal Project'
const3 = Constellation.create! name: 'Form submissions'
const4 = Constellation.create! name: 'Low priority work'

task1 = Task.new name: 'test code', time: '43'
task2 = Task.new name: 'pull request reviews', time: '30' 
task3 = Task.new name: 'screen styling', time: '122'
task4 = Task.new name: 'Optimization', time: '45'
task5 = Task.new name: 'stuff', time: '9'
task6 = Task.new name: 'stuff', time: '23'
task7 = Task.new name: 'stuff', time: '54'
task8 = Task.new name: 'stuff', time: '98'
task9 = Task.new name: 'stuff', time: '67'

const1.tasks << task3
const2.tasks << task1
const3.tasks << task2
const4.tasks << task4

const1.tasks << task5
const1.tasks << task6
const1.tasks << task7
const1.tasks << task8
const1.tasks << task9