from app.models.rpg_engine import ChildOfHades, ChildOfPoseidon, ChildOfZeus, Enemy


class DataRecord():
    """Guarda os semideuses e as criaturas do jogo."""

    def __init__(self):
        self.__demigods = []
        self.__enemies = []
        self.read()

    def read(self):
        self.__demigods.append(ChildOfZeus("Thalia"))
        self.__demigods.append(ChildOfPoseidon("Percy"))
        self.__demigods.append(ChildOfHades("Nico"))

        self.__enemies.append(Enemy("Asterius, o Minotauro", "Fera do Labirinto", 130, 24, 10, 9, 100))
        self.__enemies.append(Enemy("Hidra de Lerna", "Serpente dos Pântanos", 170, 27, 14, 8, 160))

    def get_demigods(self):
        return self.__demigods

    def get_enemies(self):
        return self.__enemies