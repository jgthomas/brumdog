
CREATE_DOG_PUBS = """CREATE TABLE IF NOT EXISTS dog_pubs (
                         id          INTEGER PRIMARY KEY NOT NULL,
                         name        TEXT NOT NULL,
                         description TEXT NOT NULL,
                         rating      INTEGER NOT NULL,
                         imageName   TEXT NOT NULL)"""


INSERT_PUB = """INSERT INTO dog_pubs (name, description, rating, imageName)
                     VALUES (?,?,?,?)"""

SELECT_ALL_PUBS = """SELECT *
                       FROM dog_pubs"""

SELECT_ALL_NAME = """SELECT id,name
                       FROM dog_pubs
                   ORDER BY name"""

SELECT_BY_ID = """SELECT *
                    FROM dog_pubs
                   WHERE id=?"""

UPDATE_PUB = """UPDATE dog_pubs
                   SET name=?,
                       description=?,
                       rating=?,
                       imageName=?
                 WHERE id=?"""
