from bottle import template

from app.controllers.datarecord import DataRecord


class Application():

    def __init__(self):
        self.pages = {
            'inicio': self.inicio
        }
        self.__model = DataRecord()

    def render(self, page):
        content = self.pages.get(page, self.helper)
        return content()

    def helper(self):
        return template('app/views/html/helper')

    def inicio(self):
        return template('app/views/html/inicio',
                        demigods=self.__model.get_demigods(),
                        enemies=self.__model.get_enemies())