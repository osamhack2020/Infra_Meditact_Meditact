# __init__.py
# Copyright (C) 2020 (jackli0373@gmail.com and youkind98@gmail.com)

import inspect
import os
import sys

__version__ = '1.0.0'

real_path = os.path.dirname(os.path.abspath(__file__)).replace("\\","/")
sys.path.append(real_path)

#__all__ = [name for name, obj in locals().items()
#           if not (name.startswith('_') or inspect.ismodule(obj))]