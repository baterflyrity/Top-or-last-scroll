"""
Simple building python 3 script that packs sources into .zip archive and renames it to .xpi.
"""
from subprocess import check_output as run
from shutil import make_archive, move

print('Packing extension sources...')
version = run("git describe").decode('utf-8').split('\n')[0]
print('Checking out version {}...'.format(version))
run('git checkout {}'.format(version))
archive = make_archive('TopOrLastScroll-{}'.format(version), 'zip', 'sources')
package = archive.replace('.zip', '.xpi')
move(archive, package)
print('Successfully packed to {}'.format(package))
print('Checking out main.')
run('git checkout main')
print('Done')
